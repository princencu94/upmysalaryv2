import ReactPlayer from 'react-player/youtube';

const files = [
    {
      title: 'Submitting Your Resume to Staffing Companies',
      source:
        'https://www.youtube.com/watch?v=7RamfETxjK0',
    },
    {
        title: 'Freezing In an Interview - How to Overcome Losing Your Train of Thought in an Interview',
        source:
          'https://www.youtube.com/watch?v=cExbZvvEF8M',
      },
      {
        title: 'When Job Hunting, How to Answer the Phone for Interview Requests, How to Talk to Recruiters',
        source:
          'https://www.youtube.com/watch?v=HQYSrv1Q3kA',
      },
      {
        title: 'Explaining Your Job Transitions & Gaps',
        source:
          'https://www.youtube.com/watch?v=B-nx7alx2cE',
      },
    

  ]
  
  export default function VideoTools() {
   
    return (
      <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {files.map((file) => (
          <li key={file.source} className="relative">
            <div className="group  block overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <ReactPlayer width="100%" url={file.source} />
            </div>
            <p className="pointer-events-none mt-2 block truncate text-lg font-medium text-blue-900">{file.title}</p>
          </li>
        ))}
      </ul>
    )
    
  }
  