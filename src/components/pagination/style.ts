import styled from "styled-components"

export const PaginationDiv = styled.div`
display: flex;
flex-direction: row;
ul{
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    padding: 1.25rem;
    list-style: none;
    li{
        margin-left: 1.875rem;

        button{
            padding: .625rem;
            color: black;
            border: none;
            background: linear-gradient(180deg, rgba(6, 206, 6, 1) 0%, rgba(100, 241, 100,0.8465511204481793) 150%);
            border-radius: .5rem;
        }

        button.pagination__item--active{
            background: rgba(2, 126, 2, 0.8)
        }
        {
         button:disabled{
            opacity: 0.5;
            cursor: default;
         }
        }
    }
}


@media (max-width: 48rem) {
    ul{
      margin: 0 auto;
      li{
        margin-left: 1.875rem;
        button{
          padding: .625rem;
          font-size: 1rem;
        }
      }
    }
  }
`