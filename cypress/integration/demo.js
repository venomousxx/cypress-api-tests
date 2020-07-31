describe('HTTP example',  function(){

    it('GET', function(){

        cy.request({
            method : 'GET',
            url    : 'http://httpbin.org/get',
        }).then(function(response){

            expect(response.body).have.property('url')
        }) 
        
    })

    it('POST', function(){

        cy.request({
            method  : 'POST',
            url     : 'http://httpbin.org/post',
            body    : {
                'name' : 'cessi',
                'category' : 'chair'
            },
            headers: {
                'content-type': 'application/json'
            }

        }).then(function(response){

            expect(response.body).have.property('json')
            expect(response.body.json).to.deep.equal({
                "name" : "cessi",
                "category" : "chair"
            })
        })     
    })

    it('PUT', function(){
            cy.request('PUT', 'http://httpbin.org/put',{'name': 'cessi'}).then(function(response){
            expect(response.body).have.property('json')
            expect(response.body.json).to.deep.equal({"name" : "cessi"}) 
            })
    })
    
    it('Delete', function(){
        cy.request('DELETE', 'http://httpbin.org/delete',{'name': 'cessi'}).then(function(response){
        expect(response.body).have.property('json')
        expect(response.body.json).to.deep.equal({"name" : "cessi"}) 
        })
    })
    
})