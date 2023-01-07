
const now = new Date();

const todos = [
    { id: '1', "startDate": new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toLocaleString(), "endDate": new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toLocaleString(), title: "Title", description: "say what to do ", isDone: false, },
    { id: '2', "startDate": new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toLocaleString(), "endDate": new Date(now.getTime() + 1 * 2 * 60 * 60 * 1000).toLocaleString(), title: "Title", description: "say what to do ", isDone: false, },
    { id: '3', "startDate": new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000).toLocaleString(), "endDate": new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000).toLocaleString(), title: "Title", description: "say what to do ", isDone: false, },
    { id: '4', "startDate": new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000).toLocaleString(), "endDate": new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleString(), title: "Title", description: "say what to do ", isDone: false, }

];

export default todos;