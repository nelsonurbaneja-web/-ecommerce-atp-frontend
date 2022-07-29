import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { HiOutlineZoomIn, HiOutlineZoomOut } from "react-icons/hi";
import styles from "./ImageZoomWrapper.module.scss";
import { AiOutlineFullscreenExit } from "react-icons/ai";

interface ImageZoomWrapperProps {
  children: JSX.Element
}

const ImageZoomWrapper = ({ children } : ImageZoomWrapperProps) => {
  return (
    <TransformWrapper>
      {({ zoomIn, zoomOut, resetTransform} : any ) => (
        <div>
          <TransformComponent>
            { children }
          </TransformComponent>
          <div className={styles.product_image_controls}>
            <HiOutlineZoomIn onClick={() => zoomIn()} />
            <HiOutlineZoomOut onClick={() => zoomOut()} />
            <AiOutlineFullscreenExit onClick={() => resetTransform()} />
          </div>
        </div>
      )}
    </TransformWrapper>
  )
}

export default ImageZoomWrapper