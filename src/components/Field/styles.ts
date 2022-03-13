import styled from "styled-components"

/*








*/

export const FieldContainer = styled.div`
  width: "100%";
  border: 1px dashed rgb(103, 114, 138);
  border-radius: 6px;
  padding: 32px;
`

export const AssetContainer = styled.div`
  width: 400px;
  height: calc(266.67px + 20px);

  .ik-asset-card {
    width: 100%;
    height: 100%;

    [data-card-part="content"] {
      object-fit: cover;
      overflow: scroll;
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;

      div {
        height: unset;
      }
    }
  }
`
