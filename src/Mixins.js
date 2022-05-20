export const d_flex = (flexDirection, justifyContent, alignItems) => {
    return` 
        display: flex;
        ${flexDirection && `flex-direction: ${flexDirection};`}
        ${justifyContent && `justify-content: ${justifyContent};`}
        ${alignItems && `align-items: ${alignItems};`}
 `
}