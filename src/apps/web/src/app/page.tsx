import { AtomButton } from '@stellaria/supernova'
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
            <AtomButton astype="flat">Flat Button</AtomButton>
            <AtomButton astype="outline">Outline Button</AtomButton>
            <AtomButton astype="none">None Button</AtomButton>
            <AtomButton disabled>Disable Button</AtomButton>
        </main>
    )
}
