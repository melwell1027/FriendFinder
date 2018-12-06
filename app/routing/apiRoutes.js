var friendData = require("../data/friends")

module.exports = function (app) {
    //get friend data to compare with new friend recevied from front end
    app.get("/api/friends", function (req, res) {
        res.json(friendData)
    })

    //call received from front end
    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;//new friend data from survey answers
        let newFriendScores = req.body.scores; //variable to capture user scores for comparison
        let scoreDifferences = []; //empty array to hold scores to be looped through to find best match
        let bestFriend = 0; //this variable is used to keep track of the current best match of that loop by its index in the array

        //loop through each friend's data
        for (let i = 0; i < friendData.length; i++) {
            let totalDifference = 0; //variable to capture the difference in scores

            //loop though the scores of the friend of the current loop and subtract the corresponding score (corresponding index) from the new //
            for (let x = 0; x < newFriendScores.length; x++) {
                totalDifference += (Math.abs(friendData[i].scores[x] - newFriendScores[x]));
            }

            scoreDifferences.push(totalDifference); //push total difference to scores array for comparison to find best match
        }

        //loop through the scores array to find the best match
        for (let i = 0; i < scoreDifferences.length; i++) {
            if (scoreDifferences[i] <= scoreDifferences[bestFriend]) {
                bestFriend = i;
            }
        }

        let friendMatch = friendData[bestFriend]
        res.json(friendMatch);

        friendData.push(newFriend); //push new friend data to the database
    })
}