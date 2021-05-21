import React from 'react'
import Nav from './nav'
import Header from './header'

// <App>
//     <Layout>
//         <Form></Form>
//     </Layout>
// </App>

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', flexGrow: '1' }}>
                <Nav />
                <main style={{ backgroundColor: 'teal', width: '100%' }}>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout