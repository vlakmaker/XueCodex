import os
import re

DOCS_PATH = "site/docs"
LOG_PATH = "mdx_warnings.log"

# --- Fix functions ---

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
    content = fix_latex(content)

    if content.startswith("---"):
        parts = content.split('---')
        if len(parts) < 3:
            return False  # Malformed frontmatter

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
        print(f"✔ Fixed: {file_path}")
        return True
    return False

# --- MDX detection logger ---

mdx_expr_pattern = re.compile(r'{[^}]+}')

def log_mdx_expressions(file_path, log_file):
    with open(file_path, 'r', encoding='utf-8') as file:
        for i, line in enumerate(file, start=1):
            if mdx_expr_pattern.search(line):
                log_file.write(f"[⚠️ Warning] Potential MDX expression in {file_path}, line {i}:\n    {line}")

# --- Main walker ---

def walk_docs(directory, log_path):
    with open(log_path, 'w', encoding='utf-8') as log_file:
        for root, _, files in os.walk(directory):
            for file in files:
                if file.endswith(".md"):
                    full_path = os.path.join(root, file)
                    fix_frontmatter_and_latex(full_path)
                    log_mdx_expressions(full_path, log_file)
    print(f"\n✅ Processing complete. See {log_path} for any remaining MDX issues.")

if __name__ == "__main__":
    print("🔧 Fixing LaTeX, frontmatter, and checking for MDX expression issues...\n")
    walk_docs(DOCS_PATH, LOG_PATH)
