import dynamic from 'next/dynamic'
// import AceEditor from "react-ace";


const CodeEditor = dynamic(import('../components/CodeEditor'), {ssr: false})

import AppLayout from '../components/AppLayout'

const Write = () => {

    return (
        <AppLayout>
            <CodeEditor value=""/>
        </AppLayout>
    )
}

export default Write