import mongoose from "mongoose";

const eventInvitationSchema = mongoose.Schema(
    {
        invitedperson: { type: String, required: true },
        eventid: { type: String, required: true },
        invitedby: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

var EventInvitationModel = mongoose.model("EventInvitations", eventInvitationSchema);
export default EventInvitationModel;