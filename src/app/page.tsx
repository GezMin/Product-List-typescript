'use client'
import { Provider } from 'react-redux'
import { ListForm } from './components/listForm/ListForm'
import { store } from './redux/store'
import { ListProduct } from './components/listProduct/ListProduct'
import { SaveTemplate } from './components/saveTemplate/SaveTemplate'
import { ToastContainer } from 'react-toastify'
import { FilterProduct } from './components/filterProduct/FilterProduct'

export default function Home() {
    return (
        <Provider store={store}>
            <header className='flex flex-col items-center justify-center h-16 bg-violet-600 '>
                <h1 className='text-3xl text-center m-2'>Список покупок</h1>
            </header>
            <main className='container mx-auto max-w-2xl flex flex-col items-center justify-start p-3 '>
                <ListForm />
                <ListProduct />
                <SaveTemplate />
                {/* <FilterProduct /> */}
            </main>
            <ToastContainer
                position='top-left'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
            />
        </Provider>
    )
}
