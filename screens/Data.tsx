import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Decode } from '../helpers/decoder'
export default function Data(Props: any) {
    const name = Props.route.params.name
    return <>
        <ScrollView>
            <Text style={[{ color: "#f96b74", padding: 20, textAlign: "center", "fontSize": 26, fontWeight: "900" }]}>
                Sorry 🙇🏻‍♂️, {name}
            </Text>
            <Text style={[{ color: "#f96b74", padding: 20, textAlign: "center", "fontSize": 22, fontWeight: "400" }]}>
                {Decode("U2FsdGVkX1/huKahYEFppTpLXWXrFX3zTf+jN0eJOcUEZDVKRxxs9aGpBk8spAz4KlE13hzogZJ6Y8Dt0khhPAwS6vlFrcGfcTpf3vwUzHYJ8Aq8/SYmOUczRrN3ljiXiCchaGY3/oQd5ZoLvzCE8/do0DzYIckWDDuONReldjOL9bSQCF8pm0Qhkv1x7l1rljudI5eklYDz1VBlbEBJPJBmBtfMKWBfWYD7WbHOnUL3sCE5w6XKlH3rr9clYyzLg86vvAqPZN1whjYcwSKWUL6F0Q5HH+BTkrNzbd2r/Rs+vEFgMk4AI0alhzb+TMnmEqQSmEDKqOB1PmcReFDUo7CCVbGc3B6rG8qjuHl/whMbUMDlS5vhxDyGktNjEYxLzt2sRtnMx/RKMV8GeJ3FeBCfM3KpylPt4/Yi9e/Btan8qtlO+6TEY6JsZj1Xht0I2RlSOXSfE2V5+Gn5aLU6BadkwiklndJJrSSc2XpiCBAM1UUlDa4twVHWm/Tzzoyju1IuXtyvFcMDvPcukczsraYBRVLmKqzZHMUBfc1JTVM=", name)}
            </Text>
            <Text style={[{ color: "#f96b74", padding: 20, textAlign: "center", "fontSize": 20, fontWeight: "400" }]}>
                {Decode("U2FsdGVkX1/41UCpNd8TS9xqis5lGkTzDnfxxyulH0+cWOvdmyHViwKGqYxLN8e5k2p2MNiHLrh21nlZG2QsngfwSjGdO3NhMp5uUYoD4dWvLtOhtOazu1AzbgeVj9i1RkQmMAiCMP8W4cIp0cEQfpn4LDbhKYE/aNekawc+0BAODYPkU+hH/KJOs0nbEcNwhz0nmv2Q8HoyAdPsZRTOce8AzdIUrfuAdRbwaRsGqhCx2aHlcoPPhmvkjr5SzZ1WlSeU0VHwzPQeCOqA0weDTxbyAUTagcBEIZApqQ3KQXM=", name)}
            </Text>
            <Text style={[{ color: "#f96b74", padding: 20, textAlign: "center", "fontSize": 20, fontWeight: "900" }]}>
                - {name}, {Decode("U2FsdGVkX1+ZGKgqMoPln3Cq1UzyL/MxW3Crh+rIqQU=", name)}
            </Text>
            <Text style={[{ color: "#f96b74", padding: 20, textAlign: "center", "fontSize": 20, fontWeight: "900" }]}>
                {Decode("U2FsdGVkX1/GWUnZmkhbT/Hz5ICR98lGoHuaxFh1iD+LMlnoTfc60bHLqsu9u5PxsL4KDiZmsGD8rf9GUXq1nQ==", name)}
            </Text>
            <Text style={[{ color: "#f96b74", padding: 20, textAlign: "left", "fontSize": 20, fontWeight: "700", borderColor: "pink", "borderWidth": 2, "margin": 20 }]}>
                {Decode("U2FsdGVkX1/CufhkErZaGMOeNJ1i0MJ96a4wANCuHVdQY2dX6dx1j8XZicq1bfOL", name)} {'\n'}
                {Decode("U2FsdGVkX1/h3d3a6JkfCtfOSXj/YvWkm9E8Wtgj3fmK0Jo2Sajt47zAysCEI4FO", name)} {'\n'}
                {Decode("U2FsdGVkX195y5K7wt553meluIJunX0I76nvAZOyNy2uYV9FtJANf6wuVcMMEd2airN9U58vbuuPsrSoZoM5Tg==", name)} {'\n'}
                {Decode("U2FsdGVkX18R+/N+rOxNBt7lojHUQkgU5nHDKIKAOfJHrLLm7LCMh7NoBHVyLkDz", name)}     {'\n'}

                {Decode("U2FsdGVkX1/Ii/CljS3tOTCaZ3TfDD7iziZmqSwA87HPr/JfEQs6WBGNqLzucYubzpqdHNkbGfNgjAPFWg6SVw==", name)} {'\n'}
                {Decode("U2FsdGVkX1+UoyfeAmL4ufgH3F/ryJBdavoZUTPfAylYVKNu7tv//B6TlWLqWxEZ7BILP4pSdVj7WVet43K6TYQXwo1o75UI+3g/pVSrJ/tzJ9c/R9R7iimLatiSttH3", name)} {'\n'}
                {'\n'}
                {Decode("U2FsdGVkX1/Z9+AXkpH23cXkUQqcm7ieJxQTEd+9RLx7mKakQYREdmo2ahmWV34559br7UU/L1SWb3zaYBiFaQ==", name)} {'\n'}
                {Decode("U2FsdGVkX18AWf23JJpacF51EYLtZ0mCdRSUv9LFRiw8HOdGRLwt2U4SOu+8QnjUZiFEdDCMC0hskqbPhl1fSg==", name)} {'\n'}
                {'\n'}
                ~By Someone Special~
            </Text>
            <Text style={[{ color: "#f96b74", paddingBottom: 30, textAlign: "center", "fontSize": 20, fontWeight: "900" }]}>
                An App Made {'\n'} By {'\n'} The Developer of Her 💖
            </Text>
        </ScrollView>
    </>
}