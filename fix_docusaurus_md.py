import os
import re

DOCS_PATH = "site/docs"

def fix_tags_line(line):
    match = re.match(r'^tags:\s*[\'\"]\[(.*?)\][\'\"]', line.strip())
    if match:
        fixed = match.group(1).strip()
        return f"tags: [{fixed}]"
    return line

def quote_frontmatter_value(value):
    if not value:
        return '""'
    if value.startswith('"') and value.endswith('"'):
        return value
    if ':' in value or '-' in value or '#' in value:
        return f'"{value.strip()}"'
    return value

def fix_latex(content):
    pattern_inline = re.compile(r'\\\((.*?)\\\)')
    pattern_block = re.compile(r'\\\[(.*?)\\\]', re.DOTALL)

    content = pattern_inline.sub(lambda m: f"${m.group(1).strip()}$", content)
    content = pattern_block.sub(lambda m: f"$$\n{m.group(1).strip()}\n$$", content)

    return content

def fix_frontmatter_and_latex(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Fix LaTeX
    content = fix_latex(content)

    if content.startswith("---"):
        parts = content.split('---')
        if len(parts) < 3:
            return  # Malformed frontmatter

        yaml = parts[1].strip().split('\n')
        body = '---'.join(parts[2:]).lstrip()

        new_yaml = []
        for line in yaml:
            if line.strip().startswith("tags:"):
                line = fix_tags_line(line)
            elif ':' in line:
                key, value = line.split(':', 1)
                value = quote_frontmatter_value(value.strip())
                line = f"{key.strip()}: {value}"
            new_yaml.append(line)

        content = f"---\n{'\n'.join(new_yaml)}\n---\n{body}"

    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✔ Updated: {file_path}")

def walk_docs(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                fix_frontmatter_and_latex(os.path.join(root, file))

if __name__ == "__main__":
    walk_docs(DOCS_PATH)
