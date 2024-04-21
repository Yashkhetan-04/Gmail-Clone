export const API_URLS = {
    saveSentEmail: {
        endpoint:'save',
        method:'post' 
    },
    getEmailFromType:{
        endpoint: 'emails',
        method: 'post'
    },
    saveDraftEmails:{
        endpoint: 'save-draft',
        method : 'post'
    },
    moveEmailsToBin:{
        endpoint: 'bin',
        method:'post',
    },
    toggleStarredEmails:{
        endpoint:'starred',
        method: 'post',
    },
    deleteEmail:{
        endpoint:'delete',
        method:'delete',
    },
}