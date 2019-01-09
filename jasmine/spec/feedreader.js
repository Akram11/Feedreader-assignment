/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application
     */
    describe('RSS Feeds', function() {
        /* This tests that the allFeeds variable has been defined
         * and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
        * in the allFeeds object and ensures it has a URL defined
        * and that the URL is not empty.
        */
        it('has a url', function(){
          for(let feed of allFeeds){
           expect(feed.url).toBeDefined();
           expect(feed.url.length).not.toBe(0);
           }
        });

        /* This  loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a a name', function(){
           for(let feed of allFeeds){
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
            }
         });
    });

    /* This suite is all about the Menu */

    describe('The menu', function() {

      /* This test ensures the menu element is
       * hidden by default.
       */
      it('is hidden on load',function() {
        let body =  document.querySelector('body');
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });

      /* This tests ensures the menu changes visibility when the menu icon is clicked.
       * has two expectations: the menu displays when
       * clicked and it hides when clicked again.
       */

      it('toggles visibility on click', function() {
        let menuIcon = document.querySelector('.menu-icon-link');
        let body =  document.querySelector('body');

        menuIcon.click();
        expect(body.classList.contains('menu-hidden')).toBe(false);

        menuIcon.click();
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });

    });

    /* This test ensures when the loadFeed function is called and completes its
     * work, and there is at least a single .entry element within the .feed container.
     */

    describe('Initial Entries', function() {
      beforeEach(function(done) {
        loadFeed(0, done);
      });
      it('loaded completely', function() {
        expect(document.querySelector('.feed').children.length > 0).toBe(true);
      });
    });





    /* TODO: Write a new test suite named "Initial Entries" */



    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
