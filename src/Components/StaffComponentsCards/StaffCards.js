import React from 'react'
import MemberStaff1 from './MemberStaff1'
import MemberStaff2 from './MemberStaff2'
import MemberStaff3 from './MemberStaff3'
import MemberStaff4 from './MemberStaff4'
import MemberStaff5 from './MemberStaff5'
import MemberStaff6 from './MemberStaff6'



const StaffCards = ({ hiddenComponents }) => {
    return (
        <div
            className={hiddenComponents ? 'hidden' : 'flex flex-col md:flex-row sm:flex-row  justify-center items-center ml-[5%] mr-[5%] gap-10 mb-10 mt-36 '}
        >
            <MemberStaff1 />
            <MemberStaff2 />
            <MemberStaff3 />
            <MemberStaff4 />
            <MemberStaff5 />
            <MemberStaff6 />

        </div>
    )
}

export default StaffCards