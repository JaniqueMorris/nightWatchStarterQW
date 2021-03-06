/**
 * Each test file may should be considered as a test suite and may contain one or * test cases. The 'beforeEach' hook may be used to run sections of code/logic before the indifivual tests
 * 
 */


//Export the entire file to ensure it is found my nightwatch
export default {

  /**
   * Nightwatch functions generally take a browser parameter to interact with th ebrowser
  */
  before(browser) {
    browser.maximizeWindow();
  },

  'Testing the Title of the "Mobile a& Web Test Automation" Page' (browser) {

    // Initialize the constant navbar to the page-object navbar
    const navbar = browser.page.navbar();

    // See navbar.js for implementation details of clickAgileCoackingLink method
    navbar
      .navigate()
      .clickMobileAndWebTestAutomation()
      .assert.title('QualityWorks Consulting Group | Mobile and Web Automation')
  },

  'Testing the Title of the "DevOps Consultancy" Page' (browser) {

    // Initialize the constant navbar to the page-object navbar
    const navbar = browser.page.navbar();

    // See navbar.js for implementation details of clickAgileCoackingLink method
    navbar
      .navigate()
      .clickDevOpsConsultancyLink()
      .assert.title('QualityWorks Consulting Group | DevOps Consultancy')
  },

  'Testing the Title of the "Agile Coaching Page"' (browser) {

    // Initialize the constant navbar to the page-object navbar
    const navbar = browser.page.navbar();

    // See navbar.js for implementation details of clickAgileCoackingLink method
    navbar
      .navigate()
      .clickAgileCoachingLink()
      //Chained Assertion
      .assert.title('QualityWorks Consulting Group | Agile Coaching and Training');
  },

  'Testing the QualityWorks Blog Search Results' (browser) {
    const blog = browser.page.blog()

    const expectedBlogResult = "CASE STUDY: AUTOMATED TEST DRIVEN RELEASES"

    blog
      .navigate()
      .searchQualityWorksBlog()
      .assert.title('You searched for auto | QualityWorks Consulting Group')
      .assert.containsText('@firstResultFromSearch', expectedBlogResult , 'Testing if first returned result contains: ' + expectedBlogResult);
  },

  // Close the browser after test completion, failure or timeout
  after(browser) {
    browser.end();
  }
}