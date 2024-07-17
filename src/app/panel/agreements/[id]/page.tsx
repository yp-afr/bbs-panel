import AgreementByIdPage from "@/components/pages/panel/agreements/agreement-by-id-page";


export default function AgreementById({ params }: { params: { id: number } }){
    return <AgreementByIdPage id={params.id}  />
}