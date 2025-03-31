import os
import re

def fix_latex_expressions(root_dir):
    pattern_inline = re.compile(r'\\\((.*?)\\\)')
    pattern_block = re.compile(r'\\\[(.*?)\\\]', re.DOTALL)

    modified_files = []

    for root, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)

                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                original_content = content

                # Replace inline math \(...\) → $...$
                content = pattern_inline.sub(lambda m: f"${m.group(1).strip()}$", content)

                # Replace block math \[...\] → $$...$$
                content = pattern_block.sub(lambda m: f"$$\n{m.group(1).strip()}\n$$", content)

                if content != original_content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    modified_files.append(file_path)

    print(f"✅ Fixed LaTeX expressions in {len(modified_files)} files.")
    for path in modified_files:
        print(f" - {path}")

# Change the path to where your markdown files are
fix_latex_expressions('./docs')
