<template>
  <div class="modelDiagram">
    <div :id="activeName" class="threeMapContainer">
      <threeMap ref="threeMapComponent" />
    </div>
  </div>
</template>

<script>
  import { threeMap } from 'threeMap'
  import 'threeMap/dist/style.css'
  const modelUrl = ['build2.json']
  export default defineComponent({
    name: 'ModelDiagram',
    components: {
      threeMap
    },
    setup() {
      const threeMapComponent = ref(null)
      const activeName = ref('modelDiagram')

      function loadMap() {
        console.log(threeMapComponent)
        nextTick(() => {
          threeMapComponent.value.threeMap.load({
            CesiumTerrainProvider: new threeMapComponent.value.CesiumTerrainProvider({
              url: 'http://cimaplite.szgeoinfo.com.cn:7101/DEM/STK_sz/',
              requestVertexNormals: true,
              requestWaterMask: false
            }),
            WebMapTileServiceImageryProvider:
              new threeMapComponent.value.WebMapTileServiceImageryProvider({
                url: 'http://t2.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=76b63efa3ab7d55f62856eb24e71db80',
                layer: 'tdtImgLayer',
                subdomains: ['t1', 't2', 't3', 't4', 't5', 't6', 't7'],
                style: 'default',
                format: 'image/jpeg',
                tileMatrixSetID: 'GoogleMapsCompatible',
                maximumLevel: 18,
                show: true
              }),
            canvasDom: document.getElementById(activeName.value)
          })
          threeMapComponent.value.threeMap.add(modelUrl)
        })
      }

      onMounted(() => {
        loadMap()
      })

      return { threeMapComponent, activeName }
    }
  })
</script>
<script setup></script>
<style lang="scss">
  .threeMapContainer {
    height: calc(100vh - 80px - 60px);
    transform: translate(0px);
    width: 100%;
  }
</style>
