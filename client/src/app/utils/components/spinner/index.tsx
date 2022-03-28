import { usePromiseTracker } from 'react-promise-tracker'
import { InfinitySpin } from 'react-loader-spinner'
import { ReactNode } from 'react'

export const MainSpinner = ({ children }: { children: ReactNode }) => {
    const { promiseInProgress } = usePromiseTracker({ delay: 200 })

    return (
        <>
            {promiseInProgress ? (
                <div className="spinner">
                    <div>
                        <InfinitySpin color="grey" width="200px" />
                    </div>
                </div>
            ) : (
                children
            )}
        </>
    )
}
