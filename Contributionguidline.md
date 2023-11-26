
#### Contributing Guidelines

### Add new link or course

**Add New Courses:**
> Check if the course you are adding already exists in the app.
> If the course doesn't exist: Go to the CategoryData.json file.
> Add the course with the following format: JSON

  ```sh
  "image": "image_url",
"name": "name_of_course",
"description": "Description of the course",
"category": "Category_of_the_course"
  ```

  **Add Links for the Course:**
  > If the link doesn't exist: Go to the `LinkData.json` file.
  > Add the link with the following format: JSON

   ```sh
  "name": "Name_of_Youtube_Channel",
"description": "Description_of_the_Video",
"url": "Link_of_the_video",
"subj": "Name_of_course_you_added"
  ```

  If the course already exists in the app and you want to add new links for it, directly go to LinksData.json and add the links in the specified format.

  ### Creating a New Issue

  Bug Report

  > If you've encountered a bug or unexpected behavior, please provide the following details:

  **Description of the Bug:**

  > A clear and concise description of what the bug is.

  **Steps to Reproduce:**

  > Clearly outline the steps to reproduce the issue.

  **Expected Behavior:**

  > Describe what you expected to happen.

  **Actual Behavior:**

  > Explain what actually happened.

  **Screenshots:**

  > If applicable, add screenshots to help illustrate the problem.

  Feature Request

  > If you have a feature request or enhancement in mind, please provide the following details:

  **Description:**

  > Clearly describe the feature you'd like to see or the problem you're trying to solve.

  **Use Case:**

  > Provide a use case or scenario for the proposed feature.

