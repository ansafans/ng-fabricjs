export interface CanvasInterface {
    allowTouchScrolling?:Boolean;
    altActionKey?:string;
    altSelectionKey?:null|string;
    backgroundVpt?:Boolean;
    centeredKey?:String;
    centeredRotation?:Boolean;
    centeredScaling?:Boolean;
    clipTo?: Function;
    containerClass?:String;
    controlsAboveOverlay?:Boolean;
    defaultCursor?:String;
    enableRetinaScaling?:Boolean;
    fireMiddleClick?:Boolean;
    fireRightClick?:Boolean;
    freeDrawingCursor?:String;
    FX_DURATION?:Number;
    hoverCursor?:String;
    imageSmoothingEnabled?:Boolean;
    includeDefaultValues?:Boolean;
    interactive?:Boolean;
    isDrawingMode?:Boolean;
    moveCursor?:String;
    notAllowedCursor?:String;
    overlayVpt?:Boolean;
    perPixelTargetFind?:Boolean;
    preserveObjectStacking?:Boolean;
    renderOnAddRemove?:Boolean;
    rotationCursor?:String;
    selection?:Boolean;
    selectionBorderColor?:String;
    selectionColor?:String;
    selectionDashArray?: [];
    selectionFullyContained?:Boolean;
    selectionKey?: String | [];
    selectionLineWidth?:Number;
    skipOffscreen?:Boolean;
    skipTargetFind?:Boolean;
    snapAngle?:Number;
    snapThreshold?:null|Number;
    stateful?:Boolean;
    stopContextMenu?:Boolean;
    svgViewportTransformation?:Boolean;
    targetFindTolerance?:Number;
    uniScaleKey?:String;
    uniScaleTransform?:Boolean;
    viewportTransform?: [];
}
