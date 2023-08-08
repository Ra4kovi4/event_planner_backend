const { Events } = require("../../models");
const { HttpError } = require("../../helpers");

const getAllEvents = async (data) => {
	const { page, limit } = data;
	const skip = (page - 1) * limit;
	const events = await Events.find({}, "-createdAt -updatedAt", {
		skip,
		limit,
	}).sort({ createdAt: -1 });

	return events;
};

module.exports = { getAllEvents };
