import { FullPageBox, LoadingSpinner } from "src/ui-library";

const Loader = () => (
    <FullPageBox props="z-10 absolute bg-VeryLightGray bg-opacity-80">
        <LoadingSpinner />
    </FullPageBox>
)

export default Loader
