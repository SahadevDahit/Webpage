const data = [{
        id: "1",
        title: "Default Login",
        url: "https://youtu.be/Rv2RspfZzgw?list=PL7zieSqakWrHCm1FK3IVs2gP_pXvnMI4C",
        animation: 'fade-right',
        description: 'In this login module, For the first time after the installation of the software, the default Username is admin and password is 1234 for the login permission which can be changed as per user choice in next module.'
    },
    {
        id: "2",
        title: "Change Credantials",
        url: 'https://youtu.be/rKZKHT04TN4',
        animation: 'fade-right',
        description: '	This module allows to change the username, password and pincode as per user choice In case, if you want to change password only then you have to fill up only username, old and new password and confirm text box but you need to provide valid old password. But if you want to change username and pincode then you have to fill all the text boxes.'

    }, {
        id: "3",
        title: "Forgot Credentials",
        url: "https://youtu.be/D28LL9WsXNQ",
        animation: 'fade-right',
        description: '	In case, if you forget username or password you can recover the username and password but in certain condition. First of all, you must provide valid pincode which you had provided while changing default login credential. Then to recover your password you must select username and provide valid username and vice-versa. '
    },
    {
        id: "4",
        title: "Institute Details",
        url: 'https://youtu.be/V9wCrewS_Mg',
        animation: 'fade-right',
        description: 'In case, if you want to edit some information regarding the institute, you can provide with the new information and update the institute information. And You can enter inside any module through Home module.'
    }, {
        id: "5",
        title: "Books Records",
        url: "https://youtu.be/TiatFQGLz5c",
        animation: 'fade-down',
        description: 'In this module, admin can perform curd operations like insert, update, delete, display. And also able to search data according different attributes inside Search by comboBox. Admin can Add or Delete faculty. And here Book limit is the total number of books that can be issue to one student. By Default it is 6 but it can be adjusted as per need.'
    },
    {
        id: "6",
        title: "Students Records",
        url: 'https://youtu.be/mTV_BfhM5To',
        animation: 'fade-right',
        description: 'In this module, admin can perform curd operations like insert, update, delete, display. And also able to search data according different attributes inside Search by comboBox. To insert image just browse file.'
    },
    {
        id: "7",
        title: "Teachers Records",
        url: "https://youtu.be/K_qEQfymP6w",
        animation: 'fade-right',
        description: 'In this module, admin can perform curd operations like insert, update, delete, display. And also able to search data according different attributes inside Search by comboBox. To insert image just browse file.'
    },
    {
        id: "8",
        title: "Staffs Records",
        url: 'https://youtu.be/jfhOSRrTnuo',
        animation: 'fade-right',
        description: 'In this module, admin can perform curd operations like insert, update, delete, display. And also able to search data according different attributes inside Search by comboBox. To insert image just browse file.'
    }, {
        id: "9",
        title: "Issuing Books",
        url: "https://youtu.be/3zlRtSkkfPE",
        animation: 'fade-right',
        description: 'For issuing Books, first of all select Enrollment for students and select Teacher id for teacher. Then select date of issue and date to be return. Here Date to be return must not be earlier than Date of issue. Same two books cannot be issued to same persons.  The no of issuing book to one person cannot be more than book limit. To generate print report just select Issue from SelectBox after issueing or it is by default. '
    },
    {
        id: "10",
        title: "Depositing Books",
        url: "https://youtu.be/GrKwFDAKUg8",
        animation: 'fade-right',
        description: 'After issueing books just click on Issue Table to see all the records of issue books. For Student record select enrollment no and for teacher select teacher id. Here Alert days is the day that is remained days to return books. The record in which date to be return is less than alert days. By default it is 5 days but it can be customize. These records are shown in red colors below alert days. Then Start Deposit books Just select the books which need to be deposit from listbooks then select Date of return which is to be later than Date to be return. And enter fine per day. By default it is 5 and calculate. Then deposit and select Deposit from selectBox and click in print. And to view all the data related to deposit just click in Deposit Books. Here you can delete any particular deposit records or delete all records'
    }
]






export default data;