export class Room{
    id: String;
    title: String;
    type: String;
    isLocked: Boolean;
    teamId: String;
    lastActivity: String;
    created: String;

    constructor(id: String, title: String, type: String, isLocked: Boolean, teamId: String,lastActivity: String, created: String)
    {
        this.id = id;
        this.title = title;
        this.type = type;
        this.isLocked = isLocked;
        this.teamId = teamId;
        this.lastActivity = lastActivity;
        this.created = created;
    }
}