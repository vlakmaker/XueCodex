import os
import re

DOCS_PATH = "docs"  # Update this if your docs are in a different folder

def fix_tags_line(line):
    # Detect string-wrapped arrays and fix them
    match = re.match(r'^tags:\s*[\'\"]\[(.*?)\][\'\"]', line.strip())
    if match:
        fixed = match.group(1).strip()
        return f"tags: [{fixed}]"
    return line

def fix_frontmatter(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if not content.startswith("---"):
        return  # Skip files without frontmatter

    parts = content.split("---")
    if len(parts) < 3:
        return  # Malformed frontmatter

    yaml_lines = parts[1].strip().split("\n")
    body = '---'.join(parts[2:]).lstrip()

    new_yaml = []
    for line in yaml_lines:
        if line.strip().startswith("tags:"):
            line = fix_tags_line(line)
        new_yaml.append(line)

    new_content = f"---\n{'\n'.join(new_yaml)}\n---\n{body}"
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"✔ Fixed tags: {file_path}")

def walk_docs(directory):
    for root, _, files in os.walk(directory):
        for file in files:  # ✅ This line was missing the colon
            if file.endswith(".md"):
                fix_frontmatter(os.path.join(root, file))

if __name__ == "__main__":
    walk_docs(DOCS_PATH)
