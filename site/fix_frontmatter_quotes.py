import os
import re

# Change this to your actual docs folder
DOCS_PATH = "docs/topics"

def quote_frontmatter_value(value):
    if not value:
        return '""'
    # If already quoted, return as is
    if value.startswith('"') and value.endswith('"'):
        return value
    # Quote if it contains colon or other YAML-breaking characters
    if ':' in value or '-' in value or '#' in value:
        return f'"{value.strip()}"'
    return value

def fix_frontmatter(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split the YAML frontmatter
    if content.startswith('---'):
        parts = content.split('---')
        if len(parts) < 3:
            return  # Invalid frontmatter

        yaml = parts[1].strip().split('\n')
        body = '---'.join(parts[2:])

        new_yaml = []
        for line in yaml:
            if ':' in line:
                key, value = line.split(':', 1)
                new_value = quote_frontmatter_value(value.strip())
                new_yaml.append(f"{key.strip()}: {new_value}")
            else:
                new_yaml.append(line)

        new_content = f"---\n{'\n'.join(new_yaml)}\n---\n{body}"

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"✔ Fixed: {file_path}")

def walk_and_fix(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                fix_frontmatter(os.path.join(root, file))

if __name__ == "__main__":
    walk_and_fix(DOCS_PATH)
