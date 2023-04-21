import styled from "styled-components"

export const PaginationDiv = styled.div`
display: flex;
flex-direction: row;
ul{
    margin-left: 570px;
    display: flex;
    flex-direction: row;
    padding: 20px;
    list-style: none;
    li{
        margin-left: 30px;

        button{
            padding: 10px;
            color: black;
            border: none;
            background: linear-gradient(180deg, rgba(6, 206, 6, 1) 0%, rgba(100, 241, 100,0.8465511204481793) 150%);
            border-radius: 8px;
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

`