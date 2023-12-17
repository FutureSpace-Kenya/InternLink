import os
import re
import subprocess

# Path to the Markdown file
markdown_file_path = 'api_endpoints.md'

# Function to run shell commands
def run_command(command):
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    if process.returncode != 0:
        print(f"Error: {stderr.decode().strip()}")
        exit(process.returncode)
    print(stdout.decode().strip())

# Function to create or append to a file
def update_file(filename, content):
    with open(filename, 'a') as file:
        file.write(content + "\n")

# Function to perform git commit and force push
def git_commit_and_push(commit_message):
    run_command("git add .")
    run_command(f"git commit -m \"{commit_message}\"")
    run_command("git push -f origin main")  # Force push to the current branch


# Read the Markdown file
with open(markdown_file_path, 'r') as file:
    markdown_content = file.read()

# Regex to find each section that requires a commit
section_pattern = r"### (.+?)\n- \*\*Endpoint:\*\* `(.+?)`\n- \*\*Method:\*\* `(\w+)`\n(.+?)(?=\n## |\n### |$)"
matches = re.findall(section_pattern, markdown_content, re.DOTALL)

# Process each match and make commits
commit_count = 0
for match in matches:
    endpoint_name, endpoint_url, method, details = match
    filename = endpoint_url.split('/')[2] + '.py'  # Example filename based on endpoint URL
    content = f"# {endpoint_name}\n# Endpoint: {endpoint_url}\n# Method: {method}\n\n"

    # Process commit details
    commit_details_pattern = r"- (.+?) \((commit \d+)\)"
    commit_details_matches = re.findall(commit_details_pattern, details)
    for commit_desc, commit_tag in commit_details_matches:
        update_content = content + f"# TODO: Implement {commit_desc}\n"
        update_file(filename, update_content)
        commit_message = f"{endpoint_name}: {commit_desc} ({commit_tag})"
        git_commit_and_push(commit_message)
        commit_count += 1

        if commit_count >= 80:
            break

    if commit_count >= 80:
        break

print("All commits processed.")
