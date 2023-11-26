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