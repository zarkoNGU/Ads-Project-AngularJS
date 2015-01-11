app.factory('filter', function() {
    var filterParams = {};
    var currentPage = 1;

    function filterByCategory(category) {
        setPageParams(1);    
        filterParams.categoryId = category.id;     
    }
    
    function filterByTown(town) {      
        setPageParams(1);       
        filterParams.townId = town.id;    
    }
    
    function getFilterParams() {
        return filterParams;    
    }
    
    function getPageParams() {
        return currentPage;    
    }
    
    function setPageParams(page) {                                  
        currentPage = page;
        filterParams.startpage = currentPage;    
    }
    
    return {
        filterByCategory: filterByCategory,
        filterByTown: filterByTown,
        getFilterParams: getFilterParams ,
        getPageParams: getPageParams,
        setPageParams: setPageParams
    }
})