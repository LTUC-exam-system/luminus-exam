
let studentModel = require("../model/students-model")
module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await studentModel.getUsers();
            return res.status(200).json({ success: true, users });
        } catch (error) {
            return res.status(500).json({ success: false, error: error })

        }
    },
    getUserById: async (req, res) => {
        try {
            let id = req.params.id
            const users = await studentModel.getUsers({ id });
            return res.status(200).json({ success: true, users });
        } catch (error) {
            return res.status(500).json({ success: false, error: error })
        }
    },
    setUserMark: async (req, res) => {
        try {
            let id = req.params.id
            const userMark = await studentModel.save({ id });
            return res.status(200).json({ success: true, users });
        } catch (error) {
            return res.status(500).json({ success: false, error: error })
        }
    },
    postStudentInfo: async (req, res) => {
        try {
            let _id = req.params.id;
            // let mark = req.body.mark
            const userMark = await studentModel.findByIdAndUpdate({ _id });
            return res.status(200).json({ success: true, users });
        } catch (error) {
            return res.status(500).json({ success: false, error: error })
        }
    }

}