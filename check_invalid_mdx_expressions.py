import os
import re

# Adjust to your markdown directory
docs_path = './site/docs'

# Regex to detect suspicious MDX-style expressions
mdx_expr_pattern = re.compile(r'{[^}]*}')

def scan_file_for_mdx(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        lines = file.readlines()
        for i, line in enumerate(lines, start=1):
            if mdx_expr_pattern.search(line):
                print(f"[⚠️ Warning] Found '{{...}}' expression in {filepath}, line {i}:")
                print(f"    {line.strip()}")

def scan_directory(path):
    for root, dirs, files in os.walk(path):
        for filename in files:
            if filename.endswith('.md') or filename.endswith('.mdx'):
                scan_file_for_mdx(os.path.join(root, filename))

if __name__ == "__main__":
    print("🔍 Scanning Markdown files for potential MDX issues...\n")
    scan_directory(docs_path)
    print("\n✅ Scan complete.")
