module.exports = {
  healthCheck: async (req, res) => {
    return {
      status: 200,
      data: {
        message: `Server is healthy`,
      },
    };
  },
};
