export class Member{
    full_name: string; 
    email: string;
    student_id: string;
    major: string; 

    costructor(object){
        this.full_name = object.memberName;
        this.email = object.memberEmail;
        this.student_id = object.memberNumber;
        this.major = object.memberMajor;
    }

}

