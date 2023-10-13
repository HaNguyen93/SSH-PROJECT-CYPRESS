const SEARCH_RESULT_ITEM_SEL="div[cel_widget_id^='MAIN-SEARCH_RESULTS']"
class AmazonSearchResults{

    get SearchResultsItem(){
        return cy.get(SEARCH_RESULT_ITEM_SEL)
    }

}

module.exports=AmazonSearchResults
