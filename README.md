# BBQ Wars


## Project Description

BBQ Wars is an Airtable and React build that gives BBQ enthusiasts the ability to share their food scores/notes via a judging 'slip', similar to a scoring slip you'd use in competitive BBQ. From the Home screen, users can view recently judged BBQ or choose to navigate to the "New Slip" form page in the Navigation bar to submit their own scoring slip and image link.


## Wireframes

The wireframes below show the homepage (with and without additional slip details) and the new slip page - for both mobile and desktop. 

BBQ Wars contains a header that includes app title/logo, along with three clickable nav links that route to their approproate component - 'Home', 'New Slip', and 'About'. The homepage displays recently submitted data from the 'New Slips' form page. 

The 'New Slip' page allows users to submited their judging notes via a form. Details captured include Team/Restaurant Name, Meat Category (ie. chicken, pork, ribs, brisket), Scoring (Appearance, Taste, Tenderness), and a field for additional notes. Judge scoring guidelines will also be provided within the New Slip page, below the submit button, via regular text format.

Main Wireframe
![imageAlt](https://i.imgur.com/o6lhEz4.png)

Post-MVP Preview
![imageAlt](https://i.imgur.com/qoxbvPq.png)


## Component Hierarchy

![imageAlt](https://i.imgur.com/3Manow4.png)


## API and Data Sample

Example data from Airtable:

```
{
    "records": [
        {
            "id": "recc8Xabg5xpf1CFp",
            "fields": {
                "notes": "a hidden gem on Beale St in Memphis, TN.  this rack of ribs had a balanced blend of tomato and vinegar flavor, but overall had a bit too much sauce co...",
                "imageURL": "https://i.imgur.com/cC3tVj7.jpg",
                "taste": "6",
                "tenderness": "6",
                "category": "Ribs",
                "appearance": "6",
                "name": "King Jerry Lawler's Hall of Fame Bar & Grille",
                "Created": "2021-02-15T22:06:49.000Z"
            },
            "createdTime": "2021-02-15T22:06:49.000Z"
        },
        {
            "id": "recgMTxxRYU9fwgML",
            "fields": {
                "notes": "this team did a great job of presenting a sliced pork with subtle notes of honey and a nice smoked hickory kick. appearance was a bit inconsistent in ...",
                "imageURL": "https://i.imgur.com/bU2QMXW.jpg",
                "taste": "8",
                "tenderness": "7",
                "category": "Pork",
                "appearance": "6",
                "name": "Team Selena",
                "Created": "2021-02-15T22:06:49.000Z"
            },
            "createdTime": "2021-02-15T22:06:49.000Z"
        },
        {
            "id": "recZwNSnRZpKxDwOX",
            "fields": {
                "notes": "a nice apple cider vinegar tase with a consistent rub texture. overall great rib!",
                "imageURL": "https://i.imgur.com/5Ws4jAA.jpg",
                "taste": "8",
                "tenderness": "8",
                "category": "Ribs",
                "appearance": "7",
                "name": "Team 505",
                "Created": "2021-02-15T22:06:49.000Z"
            },
            "createdTime": "2021-02-15T22:06:49.000Z"
        }
    ],
    "offset": "recZwNSnRZpKxDwOX"
}

```

### MVP/PostMVP

#### MVP

- Setup Airtable database
- Utilize Airtable database for making successful API calls 
- Functional button, allowing submission of new judging slips
- Render Airtable data on page with 6 components (get) 
- Allow users to submit BBQ data via 'New Slip' form (post)

#### PostMVP

- Enhanced CSS
- Design Custom Logo
- Add a 'Slip Details' button that shows/hides the judge scoring details
- Add option to sort home by meat category (ie. chicken, ribs, pork, brisket)
- Add an 'Events' and 'Add Event' page for reastaurants and competetitve BBQ teams to create events (ie. competitive BBQ event, deals/promotions, etc.)
- Incorporate a weighted rating system by dish and by restaurant/team, allowing users to rate specific dishes
- Take individual dish scores and incorporate into the SlipDetails component, listing out scores individually.
- Add edit functionality to allow users to edit their judging slip


## Project Schedule

| Day       | Deliverable                                            |    Status   |
| --------- | ------------------------------------------------------ | ----------- |
| Feb 12-15 | Prompt / Wireframes / Priority Matrix / Timeframes     | Completed   |
| Feb 16    | Proposal Approval / Link Airtable API / Pseudocoding   | Completed   |
| Feb 17    | Setup Services / Setup Components                      | Completed   |
| Feb 18    | Functionable click model / Media Queries               | Completed   |
| Feb 19    | Deployed MVP / Testing / De-bugging                    | Completed   |
| Feb 20-22 | Post MVP                                               | In Progress |
| Feb 23    | Presentations                                          | Not Started |


## Timeframes

| Component                   | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------- | :------: | :------------: | :-----------: | :---------: |
| Setup React App             |     H    |      2hrs      |      1hrs     |     0hrs    |
| Airtable / Data Setup       |     H    |      2hrs      |      3hrs     |     0hrs    |
| Component: Nav              |     H    |      3hrs      |      2hrs     |     0hrs    |
| Component: Home             |     H    |      3hrs      |      3hrs     |     0hrs    |
| Component: Form             |     H    |      3hrs      |      5hrs     |     0hrs    |
| Component: Slips            |     H    |      3hrs      |      5hrs     |     0hrs    |
| Component: About            |     H    |      1hrs      |      1hrs     |     0hrs    |
| Component: Footer           |     H    |      1hrs      |      1hrs     |     0hrs    |
| App.js Routes               |     H    |      3hrs      |      3hrs     |     0hrs    |
| Render Data                 |     H    |      3hrs      |      3hrs     |     0hrs    |
| Functional Buttons          |     H    |      3hrs      |      3hrs     |     0hrs    |
| Media Query                 |     H    |      3hrs      |      6hrs     |     0hrs    |
| CSS Styling                 |     H    |      3hrs      |      6hrs     |     0hrs    |
| Total                       |     H    |      38hrs     |      42hrs    |     0hrs    |


## SWOT Analysis


### Strengths:
Styling, building components, keeping it simple and a solid foundation first.

### Weaknesses:
Confidence.

### Opportunities:
A more strategic approach in my activie listening vs. note-taking. I recently approached taking my notes in a new way and it's already proven to be extremely effective. This new approach allows me list out the foundational building blocks (process, steps, etc.) and easily reference to the more granular details (syntax, functionality, etc.) when needed.

### Threats:
Myself. Comparing myself to others and getting in my own head. It's been said over and over by the GA Instructional Team, but the reality is... I'm incredibly competitive and it pushes me to set new/challenging goals I might not have thought were possible.