/**
 * Created by ������ on 08.02.2016.
 */
console.log("qweqwe");
VK.init(function() {
    // API initialization succeeded
    // Your code here
    VK.api('users.get',{},function(data) {
        if (data.response) {
            // data.response is object
            console.log(data.response)
        }
    });
});