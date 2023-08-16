import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProgressProvider } from './context/ProgressContext';
import { useProgressInit } from './hooks/useProgressInit';
import { FlexWrapper } from './components/shared/FlexWrapper';
import { preloadImage } from './utils/preloadImage';

const Wrapper = styled(FlexWrapper)`
  height: ${({height}) => height}px;
  overflow-x: hidden;
  align-items: center;
  background: #E8F1F8;
`;

const ComponentWrapper = styled(FlexWrapper)`
  position: relative;
  max-width: 640px;
  height: 100%;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 640px) {
    border: 3px solid white;
    border-radius: 20px;
  }
`;

function App() {
    const [height, setHeight] = useState(100);
    const progress = useProgressInit();
    const { screen } = progress;

    const Component = screen?.component || (() => null);

    useEffect(() => {
        const preloadImages = screen?.preloadImages;
        const clears = preloadImages && preloadImages.map(img => preloadImage(img));
        return () => clears && clears.forEach(clear => clear());
    }, [screen]);

    useEffect(() => {
        function handleResize() {
            const viewportHeight = document.documentElement.clientHeight;
            setHeight(viewportHeight);
        }
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ProgressProvider value={progress}>
            <Wrapper height={height}>
                <ComponentWrapper>
                    <Component height={height}/>
                </ComponentWrapper>
            </Wrapper>
        </ProgressProvider>
    )
}

export default App;
