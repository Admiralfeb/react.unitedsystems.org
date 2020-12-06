# United Systems Cooperative Website

This project started with just the ship build system, but under Loki's recommendation, the scope was expanded to the entire website, bringing USC into a REACT-ful website.

## Technologies Involved

The website is built upon the [Reactjs library](https://reactjs.org/) and was started with the [Create React App](https://create-react-app.dev/).

It uses [Material UI](https://material-ui.com/) to keep things legible and similar. Material UI is based on [Material Design](https://material.io/).

The database is built within both JSON and [MongoDB Atlas](https://www.mongodb.com/), allowing dynamic content in the, otherwise, static website.

## Pages

### Home

The home page is the landing page whenever someone comes to USC. It gives our basic lore about our squad and a video brought to us by CMDR Pablok.

### Information

Based upon CMDR UltraNeros' Archive, the USC Data Archive has a multitude of pieces of information that CMDRs can look at, from USC Links including our Rules, High Command, Allies, Fleet Carriers currently in Service, and our Discord, Inara Squad page, and Patreon.

The Archive includes guides, tools, and documentation. It's all in one place as UltraNeros imagined. It even includes some Infographics designed by CMDR IM2D.

### Join

This page was taken and adjusted slightly from the original.

### USC Builds

A sub-page of Information, but worthy enough to achieve its own home on the navbar, this system is the pièce de résistance of the website. It allows CMDRs to view and share Coriolis builds with one another.

It is database-backed and, therefore, not limited in what it can do by static-site standards.

CMDRs can add builds and filter builds. It is designed to allow variations on builds as well as display related builds if a user deems a build related to another.

Variations of a build will not display in the main search at this time.

Variations and Related builds will be able to be added from the "parent" build. This part is named "Variation/Related Phase 1" and should be completed by 12 December 2020. If you want a variation or related build added, Admiralfeb can enter them in manually provided you give him the URLs of the details pages.

Editing is planned, but, at the moment, must go through Admiralfeb as it has not yet been decided how to keep the data secure should a bad party use the website.

The Details page displays all the information about the build as well as the related/variation builds. It also displays the full description which accepts markdown.

The Add build process is a specific one, but can be changed if needed.

1. In Coriolis, save your build with a name and click the `Export` button.
2. Copy the JSON that the Export gives.
3. Navigate to the [Add Build Page](https://admiralfeb.github.io/usc-website/information/builds/add)
4. Paste the JSON into the Exported JSON field.
5. The page will automatically read the JSON and configure the following
   - Title: from the name of the build - This is not editable.
   - Build Link: from the build - This is not editable.
   - Ship Type: this will be set automatically and is not editable.
   - Engineering will be set to lvl 1 if engineering is present. You may adjust this as needed. In the future, this will be locked when we adjust the JSON reading to futher set Engineering.
   - Guardian will be set automatically - This is not editable.
   - Powerplay will be set automatically - This is not editable.
6. You will need to fill in the other appropriate values.
7. Click `Submit Build` at the bottom and the system.
8. If successful, it will clear the entry and show a notification that the submission was successful.
