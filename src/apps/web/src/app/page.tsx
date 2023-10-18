'use client'
import { AtomButton, css } from '@stellaria/supernova'
import ShowButton from '../components/show-button'

export default function Page(): JSX.Element {
    return (
        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1rem',
            }}
        >
            <ShowButton />
            <AtomButton astype="flat">Flat</AtomButton>
            <AtomButton astype="outline">Outline</AtomButton>
            <AtomButton astype="none">None</AtomButton>
            <AtomButton disabled>Disable</AtomButton>
            <AtomButton
                css={css`
                    width: 100%;
                    background-color: #ff4949;
                    border-color: #e03737;
                    color: #ffffff;
                    padding: 1rem;
                    :hover {
                        background-color: #f04545;
                        border-color: #f04545;
                    }
                `}
            >
                Custom CSS
            </AtomButton>
            <AtomButton
                backgroundColor="#4572f0"
                border="1px solid #4572f0"
                color="#ffffff"
                height={50}
                interactions={{
                    ':hover': {
                        backgroundColor: '#345fd3',
                        borderColor: '#345fd3',
                    },
                    ':active': {
                        backgroundColor: '#4c76e9',
                        borderColor: '#4c76e9',
                    },
                }}
                width={200}
            >
                With Props
            </AtomButton>
        </main>
    )
}
