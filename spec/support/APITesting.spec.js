const axios = require("axios");

describe("Testing task 1 API", ()=> {
    it("Should return the 200 response code for the GET request", (done) => {
        axios.get('http://ptsv2.com/t/fu807-1554722621/post').then((response) => {
            expect(response.status).toBe(200);
            done();
        })
    })

    it('Should return the correct response data', (done) => {
        axios.get('http://ptsv2.com/t/fu807-1554722621/post').then((response) => {

            expect(response.data).not.toBeNull()
            done()
        })
    });
    it('Should return the 200 response code for the POST request', (done) => {
        axios.get('http://ptsv2.com/t/fu807-1554722621/post').then((response) => {
            let targeturl = response.data.targetUrl
            let pass = response.data.password
            let userName = response.data.username
            let payload = {username: userName, password: pass};
            axios.post(targeturl, payload).then(function (response) {
                let status = response.status
                expect(status).toBe(200)
                done()
                //returns 401 unauthorized
            })
        })
    })
    it('Should return the 401 response code for POST request if the request body is missing parameters', (done) => {
        axios.get('http://ptsv2.com/t/fu807-1554722621/post').then((response) => {
            let targeturl = response.data.targetUrl
            let userName = null
            let pass = null
            let payload = {username: userName, password: pass};
            axios.post(targeturl, payload).catch((error) => {
                let status = error.response.status
                expect(status).toBe(401)
                done()
            })
        })
    })
    it('Should not return empty headers', (done) => {
        axios.get('http://ptsv2.com/t/fu807-1554722621/post').then((response) => {
            let targeturl = response.data.targetUrl
            let pass = response.data.password
            let userName = response.data.username
            let payload = {username: userName, password: pass};
            axios.post(targeturl, payload).catch( (error) => {
                let headers = error.response.headers
                expect(headers).not.toBeNull()
                done()
            })
        });
    })
})
