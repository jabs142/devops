# Devops CI/CD Project 🚧

## 💻  Overview: 
This project is an exploration of Continuous Integration/Continuous Deployment (CI/CD) concepts using GitHub Actions. The goal is to set up workflows that automatically trigger various actions whenever changes are committed to the repository. Given my beginner status, the approach is exploratory in nature, focusing on breadth of learning rather than in-depth implementation. 
<br> 
<br>

## 💻  Technologies & Tools Used:

![](https://skills.thijs.gg/icons?i=js,html,css,git,github)
- JavaScript 
- HTML
- CSS 
- Git
- GitHub


### [GitHub Actions](https://docs.github.com/en/actions) 
- Feature of GitHub that enables users to automate their workflows
- It allows developers to build, test, and deploy their code without leaving the GitHub platform.
- YAML files in .github/workflows directory is used to define workflows 
<br> 

## 💡 Demo:

Created a simple web-application deployed [here](https://jabs142.github.io/devops/).
<br>
<br>

### 💬  Git Commit Notification:
- Whenever a Git commit is made, an email is sent to the owner of the repository.

```yaml
jobs:
  send-notification:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: cinotify/github-action@main
        with:
          to: "owner@gmail.com"
          subject: "Git Commit Notification 🎉"
          body: "<em>A Git Commit has been made on ${{github.repository}} by ${{github.actor}}.</em>"
          type: "text/html"
```

- You can access the available GitHub contexts like `github.repository` or `github.actor` [here](https://docs.github.com/en/actions/learn-github-actions/contexts)

Future improvements: 
1) Instead of just the owner of the repository, all contributors could receive an email
2) Set up rules and groups, such that only certain individuals are notified of changes to specific files.
3) Modify notification system to send emails for pull requests instead of individual git commits.
<p align="center">
  <img src="/images/spam.png" alt="spam" style="width:80%" />
</p>
<br> 


###  🧹 Linter:
[![Super-Linter](https://github.com/jabs142/devops/actions/workflows/lint.yml/badge.svg)](https://github.com/marketplace/actions/super-linter)

- Basic set up for running the super linter tool 
- Establishes best practices and consistent formatting across multiple programming languages
- By default, it covers an extensive list of languages 

![initialize](/images/initialize.png)
<br>

**Errors caught**:

1) ❗ `changeGreeting` - The id and class attribute values must be in lowercase and split by a dash.
```html
  <body>
    <div class="container">
      <h1 id="greeting">Hello DevOps</h1>
      <button id="changeGreeting">Change Greeting</button> 
    </div>
    <script src="script.js"></script>
  </body>
```
<p align="center">
  <img src="/images/html.png" alt="Errors in HTML" style="width:80%" />
</p>
<br> 

2) ❗ Expected "0.1" to be "10%"
```css
.container {
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}
```
<p align="center">
  <img src="/images/css.png" alt="Errors in CSS" style="width:80%" />
</p>
<br>

Once all errors are caught, you would see this success page instead:
<p align="center">
  <img src="/images/success.png" alt="Success" style="width:80%" />
</p>
<br>


Future improvements:
1) Adding additional linter configurations or rules.
```yaml
- name: Super-linter
  uses: super-linter/super-linter@v6.3.1
  env:
    DEFAULT_BRANCH: main
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    VALIDATE_JAVASCRIPT_ES: true
    VALIDATE_PYTHON_FLAKE8: true
    VALIDATE_MARKDOWN: true
```
If you set any of the `VALIDATE_[LANGUAGE]` variables to `true`, super-linter defaults to leaving any unset variable to `false` (only validate those languages).

<br> 

2) Configuring the Super-Linter to ignore certain files or directories.
```yaml
- name: Super-linter
  uses: super-linter/super-linter@v6.3.1
  env:
    DEFAULT_BRANCH: main
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    FILTER_REGEX_INCLUDE: .*  # Lint all files
    FILTER_REGEX_EXCLUDE: .*test/.*|.*node_modules/.*  # Exclude test and node_modules directories
```
<br> 

## 🤔 Thoughts:
* This project has provided a good opportunity to explore the capabilities of GitHub Actions and how they can be used to implement CI/CD workflows. 
* While the current implementation is relatively simple, it lays the groundwork for more complex and advanced automation in the future.
<br> 

## 🎈 Future Improvements:
* Expand the notification system to include other communication channels, such as Slack or Microsoft Teams.
* Integrate automated testing and deployment to cloud platforms, such as AWS or Google Cloud.
* Explore more advanced linting configurations and integrations with other tools, like code coverage reporting.
<br> 
