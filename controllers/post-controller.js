

const PostsController = {
    getAllPosts : async(req, res) => {
        return res.status(200).json({
            status: true,
            message: "Successfull",
            data : []
        });
    },
    getPost : (req, resp) => {
    }
}

module.exports = PostsController;