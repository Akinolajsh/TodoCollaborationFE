import styled from 'styled-components'

const Register = () => {
  return (
    <div>
        <Container>
            <Main>
                <ImageHolder>
                    <Image/>
                </ImageHolder>
                <FillHollder>
                    <Welcome>Welcome to DevTools</Welcome>
                    <Avatar>
                        <Img/>
                    </Avatar>
                    <Title>Register!!!</Title>
                   <Wrap>
                   <InputHolder>
                    <Name>Name</Name>
                    <Input/>
                    </InputHolder>
                    <InputHolder>
                    <Input/>
                    </InputHolder>
                   </Wrap>
                   <InputHolder>
                    <Name>Email</Name>
                    <Input/>
                    </InputHolder>
                    <Wrap>
                   <InputHolder>
                    <Name>Password</Name>
                    <Input/>
                    </InputHolder>
                    <InputHolder>
                    <Name>Confirm Password</Name>
                    <Input/>
                    </InputHolder>
                   </Wrap>
                   <Text>By registering up you have to accept our Terms and Conditions</Text>
                   <Button>Register</Button>
                   <Direction>Already have any account? <Login>login</Login></Direction>
                </FillHollder>
            </Main>
        </Container>
    </div>
  )
}

export default Register

const Login= styled.div``
const Direction= styled.div``
const Button= styled.div``
const Text= styled.div``
const Input= styled.input``
const Name= styled.div``
const InputHolder= styled.div``
const Wrap= styled.div``
const Title= styled.div``
const Img= styled.img``
const Avatar= styled.div``
const Welcome= styled.div``
const FillHollder= styled.div``
const Image= styled.img``
const ImageHolder= styled.div``
const Main= styled.div``
const Container= styled.div``