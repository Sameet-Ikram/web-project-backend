import EventInvitationModel from "../Models/eventInvitation.js";


export const invitePerson = async (req, res) => {
    const { invitedperson, eventid, invitedby } = req.body;
    const eventInvitation = new EventInvitationModel({ invitedperson, eventid, invitedby });
    try {
        const savedEventInvitation = await eventInvitation.save();
        res.status(200).json(savedEventInvitation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getEventInvitation = async (req, res) => {
    const id = req.params.id;
    try {
        const eventInvitation = await EventInvitationModel.findById(id);
        res.status(200).json(eventInvitation);
    } catch (error) {
        res.status(500).json(error);
    }
}
