import WeldFittingPage from "../all/page"

export default function WeldFittingConnectors() {
  return (
    <WeldFittingPage
      defaultFittingTypes={['MC', 'FC']}
      heading="Weld Connectors"
      intro="SS316 male and female connectors with a tube socket weld (TSW) end and an NPT threaded end, for joining instrumentation tubing to threaded ports."
    />
  )
}