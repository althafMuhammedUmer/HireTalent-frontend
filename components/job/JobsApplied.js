import React from 'react'
import Link from 'next/link'
import DataTable from 'react-data-table-component'

const JobsApplied = ({jobs}) => {
    const columns = [
        {
            name: 'Job name',
            sortable: true,
            selector: (row) => row.title
        },
        {
            name: 'Salary',
            sortable: true,
            selector: (row) => row.salary
        },
        {
            name: 'Education',
            sortable: true,
            selector: (row) => row.education
        },
        {
            name: 'Experience',
            sortable: true,
            selector: (row) => row.experience
        },
        {
            name: 'Applied On',
            sortable: true,
            selector: (row) => row.appliedOn
        },
        {
            name: 'Action',
            sortable: true,
            selector: (row) => row.action   
        },




    ];

    const data = []
    jobs && jobs.forEach(job => {
        data.push({
            title: job.title,
            salary: job.salary,
            education: job.education,
            experience: job.experience, 
            appliedOn: job.appliedAt.substring(0,10),
            action: (
                <Link href={`/jobs/${job.id}`}>
                    <button className='btn btn-primary' >
                        <i aria-hidden className='fa fa-eye'></i>
                    </button>
                </Link>
            )
            

        })
    })



  return (
    <div className='row'>
        <div className='col-2'>
            
        </div>
        <div className='col-8 mt-5'>
            <h4 className='my-5'>JobsApplied</h4>
            <DataTable columns={columns} data={data} />
        </div>
        <div className='col-2'>
            
        </div>
      
    </div>
  )
}

export default JobsApplied
