const {userRegister,getUser} = require('./service');

module.exports = {
    userRegister: (req, res) => {
        const body = req.body;
        userRegister(body, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getUser: (req, res) => {
        getUser((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    }
};